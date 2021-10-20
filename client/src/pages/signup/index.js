import { attemptRegister } from '@services/auth';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const SignupPage = () => {
  const { push } = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    try {
      const qrcode = await attemptRegister(data);
      if (qrcode) {
        push(`/signup/verify?secret=${qrcode}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      {/* {loading && <Loader />} */}
      <Head>
        <title>Signup - Twitter</title>
      </Head>
      <div className='max-w-md w-full mx-auto border border-gray-200 p-5 px-6 rounded-md'>
        <h1 className='text-2xl font-semibold tracking-wide text-gray-800 my-5'>
          Create your account
        </h1>
        <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
          <div className='w-full flex flex-col space-y-2'>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              type='text'
              required
              className='py-2 px-4 border-2 border-gray-100 focus:border-primary/50 focus:outline-none focus:ring-0'
              placeholder="What's your name?"
              {...register('name', { required: true })}
            />
          </div>
          <div className='w-full flex flex-col space-y-2'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='email'
              required
              className='py-2 px-4 border-2 border-gray-100 focus:border-primary/50 focus:outline-none focus:ring-0'
              placeholder="What's your email?"
              {...register('email', { required: true })}
            />
          </div>
          <div className='w-full flex flex-col space-y-2'>
            <label htmlFor='phone'>Phone</label>
            <input
              id='phone'
              type='tel'
              required
              className='py-2 px-4 border-2 border-gray-100 focus:border-primary/50 focus:outline-none focus:ring-0'
              placeholder="What's your phone number?"
              {...register('phone', { required: true })}
            />
          </div>
          <div className='w-full flex flex-col space-y-2'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              required
              className='py-2 px-4 border-2 border-gray-100 focus:border-primary/50 focus:outline-none focus:ring-0'
              placeholder='Password'
              {...register('password', {
                required: true,
                minLength: 6,
              })}
            />
            {errors.password && (
              <span className='text-sm text-red-500'>
                Password must be at least 6 characters
              </span>
            )}
          </div>
          <button
            type='submit'
            className='border border-black py-2 px-10 text-center bg-black text-white rounded-md hover:bg-primary/90 transition duration-300 hover:opacity-80'
          >
            Sign up
          </button>
        </form>
        <div className='mt-5'>
          <p className='text-sm text-gray-600'>
            Already have an account?{' '}
            <Link href='/login'>
              <a className='text-primary hover:underline'>Login here</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
