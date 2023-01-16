
import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}`, (err, data)=>{
    if(err) {
      return res.status(500).json({"error": "Blog not found"});
    }
    res.status(200).json(JSON.parse(data));
  });
}