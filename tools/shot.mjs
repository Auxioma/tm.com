// node shot.mjs url out.png [width] [fullPage=1]
import { chromium } from 'playwright';
const [url,out,w='1024',full='1']=process.argv.slice(2);
const b=await chromium.launch({channel:'chrome'});
const p=await b.newPage({viewport:{width:+w,height:900},deviceScaleFactor:1});
await p.goto(url,{waitUntil:'networkidle'});
await p.evaluate(()=>document.fonts.ready);
await p.waitForTimeout(300);
await p.screenshot({path:out,fullPage:full==='1'});
await b.close();
