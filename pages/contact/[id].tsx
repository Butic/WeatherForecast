import type { GetStaticProps, NextPage } from 'next';

const SomeData: NextPage = ({todo}: any) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <input type={'checkbox'} checked={todo.completed}/>{todo.completed?'completed':' not completed'}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) =>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${context.params.id}`);
  const todo = await response.json();
  return{
    props:{
      todo,
    }
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos = await res.json();

  const paths = todos.map((item: any) => ({
    params: { id: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default SomeData;
