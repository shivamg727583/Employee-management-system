import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, watch, reset } = useForm();

  const onSubmit = (data) => {
    // handleSubmit already prevents the default form submission behavior
    console.log(data.email);  // you can access the email like this
    console.log(data.password);  // and password like this
  };

  return (
    <div className='flex items-center justify-center bg-[#1C1C1C] h-screen'>
      <div className="px-20 bg-zinc-800 w-full md:w-1/2 h-full flex items-center flex-col gap-6 justify-center">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Login</h1>

        <form className='flex items-center flex-col gap-6 w-full' onSubmit={handleSubmit(onSubmit)}>
          <input 
            type="email"  
            {...register('email')}  
            name='email' 
            placeholder='Enter your email' 
            className='w-full rounded-3xl border-4 outline-none border-[#973243] text-white p-3 bg-transparent'
          />
          <input 
            type="password" 
            {...register('password')} 
            name="password" 
            placeholder='Enter your password' 
            className='w-full rounded-3xl outline-none text-white border-4 border-[#973243] p-3 bg-transparent' 
          />
          <input 
            type="submit" 
            value="Login" 
            className="px-3 bg-[#973243] px-4 py-3 rounded-2xl text-white font-bold text-xl cursor-pointer" 
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
