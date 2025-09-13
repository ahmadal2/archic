// Simple test file to verify projects data
import { projects, categories } from './data/projects';

console.log('Projects:', projects);
console.log('Categories:', categories);

// Check if all projects have the correct categories
const allCategories = [...new Set(projects.map(p => p.category))];
console.log('All project categories:', allCategories);

// Check if categories array includes all project categories
const missingCategories = allCategories.filter(cat => !categories.includes(cat));
console.log('Missing categories:', missingCategories);