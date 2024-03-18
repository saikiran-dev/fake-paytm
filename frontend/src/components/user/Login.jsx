function Login({ closeModal, submitForm }) {
  return (
    <section className='flex items-center justify-center h-screen'>
      <div className='rounded-lg border bg-card text-card-foreground shadow-sm w-[70%] mx-auto md:w-[70%] lg:w-[30%] '>
        <div className='flex flex-col space-y-1.5 p-6'>
          <div className='text-2xl font-semibold leading-none tracking-tight'>
            Signin to your Account
          </div>
        </div>
        <div className='p-6 pt-0'>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col gap-4'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='email'
              >
                Email
              </label>
              <input
                name='email'
                id='email'
                placeholder='name@email.com'
                className='text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                onChange={(e) => (email.current = e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-4'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='email'
              >
                Password
              </label>
              <div className='flex border rounded-lg'>
                <input
                  className='text-black flex h-10 w-full rounded-md border border-0 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  name='password'
                  id='password'
                  type='password'
                  placeholder='••••••••'
                  onChange={(e) => (password.current = e.target.value)}
                />
              </div>
            </div>
          </div>
          <button className='h-10 px-4 py-2 my-3 w-full bg-primary dark:bg-blue-600 text-primary-foreground dark:text-neutral-950 hover:bg-primary/90 dark:hover:bg-blue-600/90 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
            Login
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
