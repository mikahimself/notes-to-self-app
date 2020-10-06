import { Note } from './notes/note';

export const NOTES: Note[] = [
  {
    title: 'Create boilerplate HTML in VS Code',
    content: {
      intro:
        'Open a blank HTML file, type in !, and Emmet can create boilerplate HTML for you.',
    },
    keywords: ['productivity', 'boilerplate', 'html', 'emmet', 'vscode'],
  },
  {
    title: 'Quickly init a node project',
    content: {
      intro: 'Use these steps to quickly init an npm project:',
      steps: [
        'npx license MIT',
        'npx gitignore [type]',
        'git init',
        'npm init -i',
      ],
    },
    keywords: ['productivity', 'init', 'node', 'project', 'gitignore'],
  },
  {
    title: 'Quickly setup an Express server',
    content: {
      intro:
        '<pre><code>const express = require("express");\nconst app = express();\n\napp.listen(3000, () => console.log("Listening on 3000"));',
    },
  },
  {
    title: 'Restart node.js server when server gets updated',
    content: {
      intro:
        'Install nodemon and run server with <code>nodemon server.js</code> to have it restart after code gets updated.\nTo ignore files or directories, use <code>nodemon --ignore lib/app.js --ignore tests/</code>',
    },
  },
  {
    title: 'Add a Node.js app on NameCheap.com',
    content: {
      intro: '...',
      steps: [
        'Find a suitable location for the app files under <code>/home/your-username/</code>. For instance, /home/your-username/node/your-app',
        'Upload your app files to the folder you created. Do not upload node-modules folder.',
        'On the cPanel dashboard, click Setup Node.js App',
        'Click Create Application',
        'In the Application root input field, enter the folder where you uploaded your app files, leaving out the <code>/home/your-username/</code> part.',
        'In the Application URL field, enter the path through which you want to access your app online. A folder corresponding to this field will be created under /home/your-username/public_html.',
        "In the Application startup file field, enter your Node.js app's filename.",
        'Click Create.',
        'If your app folder includes a package.json file, click Run NPM Install to install all the dependencies.',
        'If your app has API paths, open the folder that cPanel created under public_html (the path/folder that you entered in the Application URL field). In the .htaccess file there, add the line <code>RewriteEngine off</code>. This prevents all the funky redirects that will otherwise mess up your API paths.',
        'Make sure that the API paths in your server.js (or whichever name you chose) match the path entered in the Application URL field',
      ],
    },
  },
];
