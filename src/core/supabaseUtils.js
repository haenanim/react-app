import Constant from './constant';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = Constant.SUPABASE_URL;
const supabaseKey = Constant.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 *
 * @param {*} filename filename
 * @param {*} file file
 * @returns
 */
export async function uploadStorage(filename, file) {
  const { data, error } = await supabase.storage
    .from('img')
    .upload(filename, file);

  if (error) {
    console.log('에러' + error);
  } else {
    return data;
  }
}

/**
 *
 * @param {*} title title
 * @param {*} content content
 * @returns
 */
export async function uploadPost(title, content) {
  const { data, error } = await supabase
    .from('post')
    .insert([{ title: title, content: content }])
    .select();

  if (error) {
    console.log(error);
  } else {
    return data;
  }
}

export async function updatePost(id, imgName) {
  const { error } = await supabase
    .from('post')
    .update({ img_name: imgName })
    .eq('id', id);
}

/**
 *
 * @param {*} offset offeset
 * @param {*} limit limit
 * @returns
 */
export async function fetchPost(offset, limit) {
  const { data: postItems, error } = await supabase
    .from('post')
    .select('*')
    .range(offset, offset + limit - 1);

  const result = postItems.map((post) => {
    const res = fecthPostImageUrl(post.id);
    return {
      ...post,
      imgUrl: res,
    };
  });
  // console.log(result, 'res');

  if (error) {
    console.log(error);
  } else {
    return result;
  }
}

/**
 *
 * @param {*} postId postId
 * @param {*} index index
 */
export function fecthPostImageUrl(postId) {
  const { data } = supabase.storage.from('img').getPublicUrl(`${postId}-0`);
  return data.publicUrl;
}
