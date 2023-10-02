import React from "react";

function Nav() {
  return (
    <div>
      <div className="w-full h-[75px] flex-shrink-0 bg-[#14121D] flex justify-between xl:flex 2xl:flex">
        <img
          className="w-[120px] h-[60px] pl-[24px] flex-shrink-0 bg-[#14121D] bg-cover bg-center bg-no-repeat pt-[14px]"
          src="https://s3-alpha-sig.figma.com/img/1606/8167/ee566bf94b0dd63cc4974bb219812a44?Expires=1697414400&Signature=UbeCI-rEBWxi6jT1qAFkyeREoM7dkGwjxw4XVqPyueXKNgJAwu5ihRVevoX-FTLhjohgwIScWVKtGQgeYpxM0hcxNRUXpcox0cHa0CjmONEpz3xYYmaz2hbWvCphJ28J1cqGF06xL-ppurKg50H-rF~5XIGsE-3v6OPYlj~rgd1W56a5s1WN2mcQPenc02g0XVQs5vW22vD-4brhXQPpYFGL6Rjto6paS~epUmO24t2uPnMyWZpaNqlBgiU6VPPxmRnbocDCd~5JqIc4HJ40Y0t3fsgsftRXOtlSnGh3njp1tGCOxNaO25~08vC0UQB6bQqbEcBcOZ1YKcls-eB47A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Logo"
        />
        <div className="flex justify-between space-x-5">
          <button className="text-white hidden md:xl:lg:inline 2xl:inline">
            About Us
          </button>
          <button className="text-white hidden xl:inline 2xl:inline">
            Services
          </button>
          <button className="text-white hidden xl:inline 2xl:inline">
            Contact
          </button>
          <button className="text-white hidden xl:inline 2xl:inline">
            Portfolio
          </button>
        </div>
        <img
          src="Vector.png"
          alt="Icon"
          className="w-[20px] h-[20px] mt-[28px] mr-[26px] xl:hidden 2xl:hidden"
        />
        <button className="text-white rounded-xl bg-[#0030FF] w-[100px] h-[40px] mt-[14px] mr-[26px] hidden xl:inline 2xl:inline">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Nav;
