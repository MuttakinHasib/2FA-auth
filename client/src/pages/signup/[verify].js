import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import QRCode from 'qrcode.react';
import jwt_decode from 'jwt-decode';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { attemptVerify } from '@services/auth';

const RegisterVerification = () => {
  const { query } = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [qrcode, setQrcode] = useState(null);

  useEffect(() => {
    if (query?.secret) {
      const decoded = jwt_decode(query?.secret);
      setQrcode(decoded.qrcode);
    }
  }, [query]);

  const onSubmit = async payload => {
    try {
      const data = await attemptVerify(payload);
      console.log(data);
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
      <div className='max-w-lg w-full mx-auto border border-gray-200 p-5 px-6 rounded-md'>
        <div className='flex items-center space-x-16'>
          <div>
            <h1 className='text-2xl font-semibold tracking-wide text-gray-800 my-5'>
              Verify with OTP
            </h1>
            <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
              <div className='w-full flex flex-col space-y-2'>
                <label htmlFor='otp'>OTP Code</label>
                <input
                  id='otp'
                  type='tel'
                  required
                  className='py-2 px-4 border-2 border-gray-100 focus:border-primary/50 focus:outline-none focus:ring-0'
                  placeholder='Type here'
                  {...register('otp', { required: true })}
                />
              </div>

              <button
                type='submit'
                className='border border-black py-2 px-10 text-center bg-black text-white rounded-md hover:bg-primary/90 transition duration-300 hover:opacity-80'
              >
                Submit
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
          {qrcode && (
            <div className='flex items-center justify-center'>
              <QRCode value={qrcode} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterVerification;
