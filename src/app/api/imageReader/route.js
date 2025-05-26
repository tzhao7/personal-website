import fs from 'fs'
import path from 'path'

export async function GET(request) {
  const dirRelativeToPublicFolder = 'images'

  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  const filenames = fs.readdirSync(dir);

  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name).replace(/\\/g, '/'))

  // const relativeDir = 'public/images';
  // const absolutePath = path.resolve(process.cwd(), relativeDir);
  // const fileNames = fs.readdirSync(absolutePath);
  const imageFileNames = images.filter(file => /\.(jpg|png)$/i.test(file));

  console.log('imageFileNames', imageFileNames);
  return Response.json(imageFileNames);
}