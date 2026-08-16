import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router";
import Heading from "../components/ui/Heading";
import { useBookingDetails } from "../features/bookings/hooks/useBookingDatails";
import Loader from "../components/common/Loader";
import type { Booking } from "../features/bookings/types";
import { statusColors } from "../features/bookings/constant/table-data";
import { LuCalendarClock } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import MiniInfo from "../components/ui/MiniInfo";
import { IoCalendarOutline } from "react-icons/io5";
import { FiClock, FiPlayCircle, FiStopCircle } from "react-icons/fi";
import { formatDate, formatDuration } from "../utils/helpers";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import type { BookingComplaint } from "../features/complaints/types";
import { complaintStatusColors } from "../features/complaints/constant/table-data";
import Button from "../components/ui/Button";
import Modal from "../components/common/Modal";
import ResolveComplaintsModal from "../features/complaints/components/ResolveComplaintsModal";
import { useComplaintDetails } from "../features/complaints/hooks/useComplaintDetails";

const BookingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { data: bookingDetails, isPending: loadingDetails } = useBookingDetails(
    String(id),
  );
  const complaintId = location.state?.complaintId;
  const { data: complaintData, isPending: loadingComplaint } =
    useComplaintDetails(complaintId);
  const complaint = complaintData as BookingComplaint;

  if (loadingDetails) return <Loader />;

  const {
    booking_date,
    start_time,
    end_time,
    duration,
    status,
    governorate,
    city,
    buffer_after_minutes,
    service,
    customer,
    provider,
    estimated_price,
    final_price,
    deposit_deadline,
    final_payment_deadline,
    customer_notes,
  } = bookingDetails as Booking;

  const bookingDetailsInfo = [
    {
      Icon: IoCalendarOutline,
      title: "Date",
      value: formatDate(booking_date),
    },
    {
      Icon: FiClock,
      title: "Duration",
      value: formatDuration(Number(duration)),
    },
    {
      Icon: FiPlayCircle,
      title: "Start Time",
      value: start_time,
    },
    {
      Icon: FiStopCircle,
      title: "End Time",
      value: end_time,
    },
    {
      Icon: GrLocation,
      title: "Location",
      value: `${city.name}, ${governorate.name}`,
    },
    {
      Icon: FiClock,
      title: "Buffer After",
      value: formatDuration(buffer_after_minutes),
    },
  ];

  const paymentSummaryInfo = [
    {
      title: "Estimated Price",
      value: estimated_price.toLocaleString(),
    },
    {
      title: "Final Price",
      value: final_price === 0 ? "Not finalized" : final_price.toLocaleString(),
    },
  ];

  const paymentDeadlinesInfo = [
    {
      title: "Deposit Deadline",
      value: !deposit_deadline ? "__" : formatDate(String(deposit_deadline)),
    },
    {
      title: "Final Payment Deadline",
      value: !final_payment_deadline
        ? "__"
        : formatDate(String(final_payment_deadline)),
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <header className="card">
        <div className="flex justify-between items-center">
          <button
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <span className=" text-primary-500 text-xl">
              <IoIosArrowBack />
            </span>
            <p className=" text-neutral-500 ">Back to Bookings</p>
          </button>

          <p
            className={`text-${statusColors[status]} bg-${statusColors[status]}/10 px-2 rounded-full font-semibold capitalize`}
          >
            {status.at(0)?.toUpperCase() + status.slice(1).replace("_", " ")}
          </p>
        </div>

        <Heading as="h3">Booking #{id}</Heading>
        <div className="flex gap-2 items-center text-neutral-500 text-lg">
          <LuCalendarClock className="text-primary-500" />
          <p>
            {formatDate(booking_date)} at {start_time}
          </p>
        </div>
        <div className="flex gap-2 items-center text-neutral-500 text-lg">
          <GrLocation className="text-primary-500" />
          <p>
            {governorate.name}, {city.name}
          </p>
        </div>
      </header>

      {/* complaint */}
      {loadingComplaint ? (
        <div className="card">
          <Loader />
        </div>
      ) : (
        complaint && (
          <div className="card">
            <div className="flex justify-between items-center ">
              <Heading as="h5">Complaint Details</Heading>
              <p
                className={`text-${complaintStatusColors[complaint.status]} bg-${complaintStatusColors[complaint.status]}/10 px-2 rounded-full font-semibold capitalize`}
              >
                {complaint.status.at(0)?.toUpperCase() +
                  complaint.status.slice(1).replace("_", " ")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <MiniInfo title="Complaint ID" value={complaint.id.toString()} />
              <MiniInfo
                title="Submitted At"
                value={formatDate(complaint.created_at)}
              />
              <MiniInfo title="Customer Name" value={complaint.customer_name} />
              <MiniInfo title="Provider Name" value={complaint.provider_name} />
              <Modal>
                <span className=" col-span-2 flex justify-between items-center">
                  <MiniInfo title="Description" value={complaint.description} />
                  {complaint.status === "pending" && (
                    <Modal.Open opens="make-decision">
                      <Button variant="primary">Make decision</Button>
                    </Modal.Open>
                  )}
                  <Modal.Window name="make-decision">
                    <ResolveComplaintsModal complaintId={complaint.id} />
                  </Modal.Window>
                </span>
              </Modal>
            </div>
          </div>
        )
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Booking Details */}
        <div className="card justify-start">
          <Heading as="h5">Booking Details</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {bookingDetailsInfo.map((info, index) => (
              <MiniInfo key={index} {...info} />
            ))}
            <span className=" col-span-2">
              <MiniInfo
                Icon={TbNotes}
                title="Cusstomer note"
                value={customer_notes}
                col
              />
            </span>
          </div>
        </div>

        {/* Service Details */}
        <div className="card">
          <Heading as="h5">Service Details</Heading>
          <div className="flex gap-4">
            <img
              src={service.image}
              alt={service.name}
              className=" w-28 h-28 rounded-md"
            />
            <div className="flex flex-col items-baseline gap-2">
              <h6 className="font-semibold">{service.title}</h6>
              <p className="bg-primary-500/10 w-fit h-fit rounded-full px-4 ">
                {service.category.name}
              </p>
              <div>
                <span className="font-semibold text-lg text-primary-500">
                  {service.base_price.toLocaleString()}
                </span>
                <span className=" text-neutral-500">
                  /{service.pricing_type_view}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer */}
        <div className="card ">
          <Heading as="h5">Customer</Heading>
          <div className="flex gap-4">
            <img
              src={customer.avatar}
              alt="profile img"
              className=" w-16 h-16 rounded-full"
            />
            <div className="flex flex-col items-baseline gap-2">
              <h6 className="font-semibold">{customer.name}</h6>
              <p className=" text-neutral-500">{customer.email}</p>
            </div>
          </div>
        </div>

        {/* Provider */}
        <div className="card ">
          <div className="flex justify-between items-center">
            <Heading as="h5">Provider</Heading>
            <button
              className="flex gap-2 items-center text-neutral-500 cursor-pointer"
              onClick={() => navigate(`/providers/${provider.id}`)}
            >
              <MdOutlineArrowOutward className="text-primary-500 text-xl" />
              <p>View Profile</p>
            </button>
          </div>
          <div className="flex gap-4">
            <img
              src={provider.avatar}
              alt="profile img"
              className=" w-16 h-16 rounded-full"
            />
            <div className="flex flex-col items-baseline gap-2">
              <h6 className="font-semibold">{provider.name}</h6>
              <p className=" text-neutral-500">{provider.email}</p>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="card">
          <Heading as="h5">Payment Summary</Heading>
          <div className="flex flex-col gap-2">
            {paymentSummaryInfo.map((info, index) => (
              <MiniInfo key={index} {...info} />
            ))}
          </div>
        </div>

        {/* Payment Deadlines */}
        {(deposit_deadline || final_payment_deadline) && (
          <div className="card">
            <Heading as="h5">Payment Deadlines</Heading>
            <div className="flex flex-col gap-2">
              {paymentDeadlinesInfo.map((info, index) => (
                <MiniInfo key={index} {...info} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingDetails;
