import React from 'react';
import { activities } from '../../../data/activities';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Container from '../../common/Container/Container';
import ActivityCard from '../../cards/ActivityCard/ActivityCard';
import Button from '../../common/Button/Button';

export const ActivitiesPreview = () => {
  // Show first 3 activities
  const previewActivities = activities.slice(0, 3);

  return (
    <section className="py-24 bg-bgLight">
      <Container>
        <SectionTitle
          title="Bespoke Excursions"
          subtitle="Adventure & Discovery"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewActivities.map((act) => (
            <ActivityCard key={act.id} activity={act} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button to="/activities" variant="outline">
            View Experience Roster
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ActivitiesPreview;
