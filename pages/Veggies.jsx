import Image from "next/image";

export default function Veggies() {
  return (
    <>
      <h1>Veggies</h1>
      <p>Oh nice! Some veggie recipes for my belly!</p>
      <Image
        src="/pizza.jpg"
        alt="veggie pizza"
        layout="responsive"
        width={2400}
        height={1596}
      />
    </>
  );
}
