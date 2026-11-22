
const STORAGE_KEY = 'codetrack_problems';

export const getProblems = () => {
  try {
    const savedProblems = localStorage.getItem(STORAGE_KEY);
    return savedProblems ? JSON.parse(savedProblems) : [];
  } catch (error) {
    console.error('Error loading problems:', error);
    return [];
  }
};

export const saveProblems = (problems) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(problems));
  } catch (error) {
    console.error('Error saving problems:', error);
  }
};
