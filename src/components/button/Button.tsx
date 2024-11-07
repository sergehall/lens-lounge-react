// src/components/button/button.tsx

import React from 'react';
import styles from './button.module.css';

const Button: React.FC = () => {
    return <button className={styles.primaryButton}>Click Me</button>;
};

export default Button;

// Add this line if there is no export in the file yet
export {};  // Ensures TypeScript treats this as a module
