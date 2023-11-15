const ShoeCard = ({ imageUrl, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imageUrl.bigShoe) {
        changeBigShoeImage(imageUrl.bigShoe)
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-xl ${
        bigShoeImage === imageUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imageUrl.thumbnail} alt="shoe image" width={127} height={103} className="object-contain"/>
      </div>
    </div>
  );
};

export default ShoeCard;
