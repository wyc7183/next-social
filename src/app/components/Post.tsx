import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className='flex items-center gap-4'>
                    <Image src="https://images.pexels.com/photos/4668513/pexels-photo-4668513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
                    <span className="font-medium">Jack McBride</span>
                </div>
                <Image src="/more.png" width={16} height={16} alt="" />
            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image src="https://images.pexels.com/photos/20507497/pexels-photo-20507497/free-photo-of-model-posing-in-boots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className="object-cover rounded-md" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat quidem quia impedit dignissimos praesentium nesciunt eos. Obcaecati est quasi expedita deserunt dolores? Dolorum numquam maiores eveniet natus pariatur assumenda?

                </p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className='flex gap-8'>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src="/like.png" width={16} height={16} alt="" className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Likes</span>
                        </span>
                    </div>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src="/comment.png" width={16} height={16} alt="" className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Comments</span>
                        </span>
                    </div>
                </div>

                <div className="">
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src="/share.png" width={16} height={16} alt="" className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Shares</span>
                        </span>
                    </div>
                </div>
            </div>

                <Comments/>
        </div>
    )
}

export default Post;