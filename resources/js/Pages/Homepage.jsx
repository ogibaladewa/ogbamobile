import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
    console.log(props)
    return (
        <>
          <Head title={props.title}/>
          <div className='bg-slate-200 text-blue-500'>
            <h1>Homepage</h1>
          </div>
        </>
    )
};