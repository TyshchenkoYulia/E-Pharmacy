import productDescription from "../assets/data/productDescription";

export default function ProductDescription() {
  return (
    <div
      className="flex flex-col gap-[20px] text-[14px] leading-[18px]
    tablet:text-[16px] tablet:leading-[24px]"
    >
      <p className=" text-secondaryText">{productDescription.general}</p>

      <ul className="flex flex-col gap-[20px]">
        {productDescription.medicinalUses.map((item, i) => (
          <li key={i} className="">
            <strong className="text-secondaryText font-400 mr-[5px]">
              {item.title}:
            </strong>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
