const Loading = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className="animate-spin inline-block w-24 h-24 border-[5px] border-current border-t-transparent text-green-600 rounded-full dark:text-green-500" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading