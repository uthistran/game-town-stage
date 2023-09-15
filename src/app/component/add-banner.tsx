const AddBanner = () => {
   
    const addCount: number = 3;

    return (
        <div id="adsHolder" className="flex-1 flex mt-[20px] mb-[20px] flex-col border-l-[2px] border-solid border-black">
            {
                Array(addCount).fill(
                    <img src="assets/images/promo.png" className="w-[96%] p-[5px]" />
                )
            }
        </div>
    )
}

export default AddBanner;