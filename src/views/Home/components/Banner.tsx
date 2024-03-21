const Banner: React.FC = () => (
    <>
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="flex flex-row m-10">
                    <div className="bg-gray-100 basis-4/5 mr-2">
                        <div className=" ">
                            <video className="w-full h-full rounded-lg object-cover" controls autoPlay>
                                <source src="../../../assets/images/3b67045d018e00001.mp4" type="video/mp4" />{' '}
                                {/* 동영상 파일 경로 지정 */}
                                Your browser does not support the video tag.{' '}
                                {/* 브라우저가 video 태그를 지원하지 않을 때 대체 메시지 */}
                            </video>
                        </div>
                        <div className="bg-blue-500 text-white px-4 py-2 mr-2"></div>
                        <div className="bg-green-500 text-white px-4 py-2"></div>
                    </div>
                    <div className="bg-gray-100 flex flex-col basis-1/5">
                        <div className="bg-zinc-500 basis-3/5 mb-1 p-4 rounded-xl">
                            {/* 작은 배너나 컨텐츠를 넣으세요 */}
                            <p>This is content 01</p>
                        </div>
                        <div className="bg-zinc-500 basis-3/5 p-4 rounded-xl">
                            {/* 작은 배너나 컨텐츠를 넣으세요 */}
                            <p>This is content 02</p>
                        </div>
                        <div className="bg-zinc-500 basis-2/5 mt-1 p-4 rounded-xl">
                            {/* 작은 배너나 컨텐츠를 넣으세요 */}
                            <p>This is content 03</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Banner
