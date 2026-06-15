import { useState, useEffect } from 'react';
import jobsData from '../data/jobs.json';

export const useJob = (id) => {
  const [job, setJob] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate network delay
    setLoading(true);
    const fetchJob = () => {
      const foundJob = jobsData.find((j) => j.id === id);
      setJob(foundJob || null);

      if (foundJob) {
        const related = jobsData
          .filter(
            (j) => j.industry === foundJob.industry && j.id !== foundJob.id
          )
          .slice(0, 5); // Max 5 related jobs
        
        // If not enough related by industry, just fill with others to make UI look good
        if (related.length === 0) {
          const fallbackRelated = jobsData
            .filter((j) => j.id !== foundJob.id)
            .slice(0, 5);
          setRelatedJobs(fallbackRelated);
        } else {
          setRelatedJobs(related);
        }
      } else {
        setRelatedJobs([]);
      }
      setLoading(false);
    };

    const timer = setTimeout(fetchJob, 300); // 300ms delay to show fade-in
    return () => clearTimeout(timer);
  }, [id]);

  return { job, relatedJobs, loading };
};
