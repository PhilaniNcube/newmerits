import Head from 'next/head';
import { Fragment } from 'react';
import Hero from '../components/Hero';
import dbConnect from '../lib/mongodb';
import School from '../Models/School';
import User from '../Models/User';

export default function Home({ schools, users }) {
  console.log(schools);
  console.log(users);

  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await School.find({}).populate('users');
  const schools = result.map((doc) => {
    const school = doc.toObject();
    school._id = school._id.toString();
    school.users = JSON.parse(JSON.stringify(school.users));
    return school;
  });

  const userRes = await User.find({}).populate('school');
  const users = userRes.map((doc) => {
    const user = doc.toObject();
    user._id = user._id.toString();
    user.school = JSON.parse(JSON.stringify(user.school));
    return user;
  });

  return { props: { schools: schools, users: users } };
}
