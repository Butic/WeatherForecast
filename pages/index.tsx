import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

const Home: NextPage = ({todos}: any) => {
  return (
    <div>
      {todos.map((el: { title: string, id:number })=>(<p key={el.id}><Link href={`/contact/${el.id}`} key={el.id}>{el.title}</Link></p>))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();

  return {
    props:{
      todos,
    }
  };
}

export default Home;
