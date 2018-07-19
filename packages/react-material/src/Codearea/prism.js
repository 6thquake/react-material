import prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-diff';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

// import lightTheme from 'prismjs/themes/prism.css';
// import darkTheme from 'prismjs/themes/prism-okaidia.css';
// import lineNumbers from 'prismjs/plugins/line-numbers/prism-line-numbers.css';
// export { lightTheme, darkTheme };

// let styleNode;

// if (process.browser) {
//   styleNode = document.createElement('style');
//   styleNode.setAttribute('data-prism', 'true');
//   if (document.head) {
//     document.head.appendChild(styleNode);
//     setPrismTheme(lightTheme);
//   }
// }

// export function setPrismTheme(theme) {
//   styleNode.textContent = theme + lineNumbers;
// }

export default prism;
