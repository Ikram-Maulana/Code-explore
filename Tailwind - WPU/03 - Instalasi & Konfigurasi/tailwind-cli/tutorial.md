# Tutorial Init and Configure Tailwindcss Using CLI
Here i'm using yarn package manager, but you can use npm also  
1. Init folder  
`yarn init`
2. Install Tailwindcss, Postcss, and Autoprefixer on DevDependencies  
`yarn add tailwindcss postcss autoprefixer --dev`
3. Init Tailwind to get configuration files
`npx tailwindcss init`
4. Create 2 folder, src and public. **src** for raw postcss file, **public** for html and output files. **Then add this code to Tailwindcss configuration files**  
```
content: ["./public/**/*.{html,js}"],
```
5. Create **input.css** on ./src/css/input.css  
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
6. Add script for auto watch on package.json  
```
"dev": "npx tailwindcss -i ./src/css/input.css -o ./public/css/style.css --watch"
```
7. Add script for minify tailwind when final edit  
```
"minify": "npx tailwindcss -o ./public/css/final.css --minify"
```
8. Create index.html file on public folder and create your own html. Don't forget to import style css
9. Run script and enjoy your journey  
`yarn run dev`