Get Me A Pizza 🍕

Get Me A Pizza is a full-stack Next.js application that allows users to crowd funding with seamless authentication and a modern, responsive interface. The project showcases my skills in building scalable web applications with social login, database integration, and state management.

Key Features -
- OAuth Authentication: Login with Google, GitHub, LinkedIn, Twitter, Facebook, and Apple using NextAuth.js.
- User Management: MongoDB integration with Mongoose to handle user accounts and sessions.
- Responsive UI: Built with Tailwind CSS, optimized for mobile and desktop.
- Dashboard: Personalized dashboard showing user-specific data.
- Secure Environment: All sensitive credentials stored in .env, with secure session management.
- Modern Next.js Practices: Leveraging Next.js App Router, client/server components, and API routes.

Tech Stack -

- Frontend & Backend: Next.js (React)
- Authentication: NextAuth.js with multiple OAuth providers
- Database: MongoDB with Mongoose
- Styling: Tailwind CSS
- State Management: React Hooks (useState, useEffect)
- Version Control: Git & GitHub


Example Workflow -

- User login(provide your id and secret on .env file to login using social accounts otherwise just click as a guest login).
- Go to dashboard for update your information # (do not update your username if you login as a guest).
- Now click on 'Your Page' section for payment.
- On 'Your Page' section you can see your details.
- Now donate whatever you can to help your favorite creator.


📸 Screenshots -

**Home Page**  
![Home](Screenshots/home.png)

**Dashboard Page **  
![Dashboard](Screenshots/dashboard.png)

**Your Profile Page **  
![Your-Profile](Screenshots/your-profile.png)

**Payment Page **  
![Payment](Screenshots/payment.png)

**About Page**  
![About](Screenshots/about.png)


🚀 Getting Started -

Follow these steps to run Get-Me-A-Pizza locally:

1. Clone the repository

git clone (https://github.com/Soumitramaji/GetMeAPizza.git)

2. Install dependencies

npm install
or
yarn install

3. Set up environment variables

MONGODB_URI=mongodb://localhost:27017/

NEXT_PUBLIC_HOST=http://localhost:3000

4. Run the development server

npm run dev
or
yarn dev

5. Open the link in browser

http://localhost:3000
