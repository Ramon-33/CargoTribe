// pages/components/pages/empty-page1.js
import Seo from '@/shared/layout-components/seo/seo';
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';

const EmptyPage1 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/emails')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Handle fetched emails
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching emails:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Your component JSX here */}
    </div>
  );
};

export default EmptyPage1;
