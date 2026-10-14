# juliepham07 website

- index.html: the whole website (Home, Travel, Fun pages)
- photos/ and videos/: the site's photos and year-end videos
- api/duolingo.js: shows the live Duolingo streak once the site is on Vercel

## Put the site online (first time)
1. Install Node.js (LTS) from https://nodejs.org if you don't have it.
2. In File Explorer, open this folder, click the address bar, type `cmd` and press Enter.
3. Run:  npx vercel --prod
4. Log in when your browser opens. Answer the questions:
   - Set up and deploy? Y
   - Which scope? your account
   - Link to existing project? N
   - Project name? juliepham07
   - In which directory is your code located? ./  (press Enter)
   - Modify settings? N
5. Your site is live at https://juliepham07.vercel.app

## Update the site later
Open cmd in this folder again and run:  npx vercel --prod
