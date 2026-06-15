import { Routes, Route, Navigate } from 'react-router-dom';
import JobDetailPage from './pages/JobDetailPage';
import EmployerLogin from './pages/EmployerLogin';
import JobPrep from './pages/JobPrep';
import Contests from './pages/Contests';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/jobs/job-001" replace />} />
      <Route path="/jobs/:id" element={<JobDetailPage />} />
      <Route path="/employer-login" element={<EmployerLogin />} />
      <Route path="/job-prep" element={<JobPrep />} />
      <Route path="/contests" element={<Contests />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
