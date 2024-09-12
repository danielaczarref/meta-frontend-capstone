import React from "react";
import "./About.css";
import ImageRestaurant from "../../../assets/restaurant.jpg";
import ImageStaff from '../../../assets/restaurantstaff.jpg';

const AboutComponent = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae enim ac orci viverra finibus ut nec ipsum. Proin et facilisis eros. Suspendisse pretium, velit elementum porta volutpat, orci ex ornare erat, vel dapibus orci dui a magna. Curabitur euismod magna id condimentum sollicitudin. In at lorem sapien. Nullam vestibulum lectus quis turpis elementum fringilla. In nec est volutpat, viverra nunc id, posuere libero. Proin pellentesque dui orci, vel luctus nibh cursus a.
        </p>
      </div>
      <div className="staff-description">
        <h2 className="about-subtitle">Our Staff</h2>
        <p className="about-description">
        In vehicula aliquam lorem. Etiam efficitur augue ut aliquam venenatis. Mauris diam orci, tincidunt in vehicula ut, lacinia ut lacus. Sed eget ex tristique, condimentum erat nec, venenatis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis et vulputate nisl. Nam id convallis nibh. Proin suscipit mi at vehicula condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc erat lorem, convallis vitae orci ac, fermentum luctus nisl. Quisque rutrum ut lorem non lacinia. Vivamus id placerat quam. Proin hendrerit sodales varius. Suspendisse velit turpis, placerat a aliquam non, sodales vitae tellus. Nunc maximus blandit elit, in commodo nisl imperdiet nec. Vivamus condimentum ex id risus tempus ultricies.
        </p>
      </div>

      <img
        className="about-image-restaurant"
        src={ImageRestaurant}
        alt="Restaurant's food"
        height={200}
        width={200}
      />

<img
        className="about-image-staff"
        src={ImageStaff}
        alt="Restaurant's staff"
        height={200}
        width={200}
      />

    </div>
  );
};

export default AboutComponent;
