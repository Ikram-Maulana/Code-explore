# Why Tailwind CSS?
"**Best practices** don't actually work."  
[CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)  

### "Separation of Concerns"
- Structure **(HTML)**
- Presentation **(CSS)**
- Behaviour **(JS)**

## 2 Ways of Creating CSS
1. **Separation of Concerns**  
CSS yang bergantung pada HTML (HTML Restyleable but CSS not Reusable)
2. **Mixing of Concerns**  
HTML yang bergantung pada CSS (HTML not Restyleable but CSS is Reusable)

> The more a component does, or the more specific a component is, the harder it is to reuse

> You should still create components, but built them using **utility first**. - Adam Wathan

### In tailwind u can create components like this:  
```
@layer components {
  .tombol-ungu {
  @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75; 
  }
}
```