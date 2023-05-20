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

export async function updatePostImgName(id, imgName) {
  const { error } = await supabase
    .from('post')
    .update({ img_name: imgName })
    .eq('id', id);
}

export async function updatePost(id, title, content) {
  const { error } = await supabase
    .from('post')
    .update({ title: title, content: content })
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
    .order('created_at', { ascending: false })
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

export async function deletePost(id) {
  const { data: postItems, error } = await supabase
    .from('post')
    .delete()
    .eq('id', id);
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

export async function getDatabaseById(id) {
  const { data, error } = await supabase.from('post').select('*').eq('id', id);

  if (error) {
    console.error(error);
    return -1;
  }
  const res = fecthPostImageUrl(id);
  return {
    ...data[0],
    imgUrl: res,
  };
}

export async function postCount() {
  const { data, error } = await supabase.from('post').select('id');
  if (error) {
    console.log(error);
  } else {
    return data;
  }
}
