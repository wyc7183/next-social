import Image from "next/image";

const Stories = () => {

    return (
        <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
            <div className="flex gap-8 w-max">
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/27592684/pexels-photo-27592684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium ">Ricky</span>
                </div>

                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/27555575/pexels-photo-27555575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium ">Ricky2</span>
                </div>  <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/27592684/pexels-photo-27592684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium ">Ricky</span>
                </div>

                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/27555575/pexels-photo-27555575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium ">Ricky2</span>
                </div>  <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/27592684/pexels-photo-27592684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium ">Ricky</span>
                </div>

                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/27555575/pexels-photo-27555575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium ">Ricky2</span>
                </div>  <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/27592684/pexels-photo-27592684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium ">Ricky</span>
                </div>

                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/27555575/pexels-photo-27555575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium ">Ricky2</span>
                </div>
            </div>

        </div>
    )
}

export default Stories;