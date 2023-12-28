
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const ClassCard = ({item}) => {
    return (
        <div className=" bg-base-100">
            <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{item.name}</p>
        <small className="text-default-500">Students: {item.studentsNumber}</small>
        <small className="text-default-500">Available Seats: {item.availableSeats}</small>
        <h4 className="font-bold text-large">instructor: {item.instructor}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={item.image}
          width={270}
        />
      </CardBody>
    </Card>
        </div>
    );
};

export default ClassCard;