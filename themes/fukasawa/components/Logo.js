import Link from 'next/link'

const Logo = props => {
  const { siteInfo } = props
  return (
   <section className='flex'>
    <Link
     href='/'
     className='px-2 py-2 cursor-pointer dark:text-gray-300 dark:border-gray-300 font-black'>
     {siteInfo?.title}
    </Link>
   </section>
  );
}

export default Logo
