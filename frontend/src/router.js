import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './signIn';
import SignUp from './signUp';
import PostJob from './pages/postjob/postJob';
import JobList from './pages/postjob/jobList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/joblist" element={<JobList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;