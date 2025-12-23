import{j as e,M as s}from"./index-D0n8hDJ4.js";const r="_container_94g5k_1",a="_content_94g5k_13",i="_signature_94g5k_51",n={container:r,content:a,signature:i},c=({children:t,date:o})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:n.container,children:e.jsxs("div",{className:n.content,children:[t,e.jsx("br",{}),e.jsx("p",{className:n.signature,children:"---"}),e.jsx("p",{className:n.signature,children:"Thanks for reading,"}),e.jsxs("p",{className:n.signature,children:["Tony Lam (",o,")"]})]})})}),l=`# How to Access Computer's Local Server on Any Device
In order to access a computer’s local server, you have to change the server’s listener from just its own machine to everybody on the network. This is done by configuring the server to listen on 0.0.0.0 instead of just localhost (127.0.0.1). The difference is that the 127.0.0.1 IP address loops back to itself, so the server can only be accessed by the machine directly connected to it. But through changing the IP binding to 0.0.0.0, the server is able to be accessed by any machine on the same Wi-Fi network.

**Warning**: Only do this on a trusted network because anyone on the Wi-Fi can potentially view your work. If you want a non-accessible option, consider USB tethering.

## Step 1: How to bind your server to 0.0.0.0

You usually just have to add a --host flag on your run server command. This flag can look different for different frameworks, so here are some common ones. If the one you are using is not listed here, then search up “how to run {current framework} on 0.0.0.0?”

\`\`\`
npm run dev -- --host            // Vite
npx next dev -H 0.0.0.0          // Next.js
HOST=0.0.0.0 npm start           // Normal React App (CRA)
python manage.py runserver 0.0.0.0:8000 // Django -> you must also change your ALLOWED_HOSTS in settings.py
flask run --host=0.0.0.0         // Flask
uvicorn main:app --host 0.0.0.0  // FastAPI (Uvicorn)
rails server -b 0.0.0.0          // Ruby on Rails
\`\`\`

## Step 2: Connect

After you have run the designated command, the line will prompt up with a network URL, usually in the form of your computer's IP address followed by a port (e.g., "Network: http://192.168.1.15:5173"). If the command line doesn't pop up something like this, simply type your computer's local IP address followed by the server's port (should look like the URL in the aforementioned example).
`,u=()=>e.jsx(e.Fragment,{children:e.jsx(c,{date:"12/21/25",children:e.jsx(s,{children:l})})});export{u as default};
