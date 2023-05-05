import Constant from './constant';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = Constant.SUPABASE_URL;
const supabaseKey = Constant.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

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

export async function fetchPost(offset, limit) {
  const { data, error } = await supabase
    .from('post')
    .select('*')
    .range(offset, offset + limit - 1);

  if (error) {
    console.log(error);
  } else {
    return data;
  }
}
