// Intersection Observer for all sections animation
export const observer = new IntersectionObserver((entries) => entries.forEach((entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // only trigger once
            }
        })));