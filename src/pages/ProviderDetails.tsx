import { useNavigate, useParams } from "react-router";
import { useProviderDetails } from "../features/users/hooks/useProviderDetails";
import Heading from "../components/ui/Heading";
import Loader from "../components/common/Loader";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../components/ui/Button";
import {
  statusBgColors,
  statusColors,
} from "../features/users/constants/tables-data";
import type { InfoBlockProps, Provider } from "./../types";
import { GrLocation } from "react-icons/gr";
import InfoBlock from "../components/ui/InfoBlock";
import { weekDays } from "../features/users/constants/provider-details";
import { useProviderPortfolios } from "../features/users/hooks/useProviderPortfolios";
import type { Portfolio, Review } from "../features/users/types";
import { useProviderReviews } from "../features/users/hooks/useProviderReviews";
import ReviewCard from "../features/users/components/ReviewCard";
import { useUnbanUser } from "../features/users/hooks/useUnbanUser";
import { useBanUser } from "../features/users/hooks/useBanUser";
import Modal from "../components/common/Modal";
import ConfirmationModal from "../components/common/ConfirmationModal";
import RejectProvider from "../features/users/components/RejectProvider";
import { useApproveProvider } from "../features/users/hooks/useApproveProvider";
// import i18n from "../lib/i18n";

const ProviderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: provider, isPending: loadingProvider } = useProviderDetails(
    String(id),
  );
  const { data: portfolios, isPending: loadingPortfolios } =
    useProviderPortfolios(String(id));
  const { data: reviews, isPending: loadingReviews } = useProviderReviews(
    String(id),
  );
  const { mutateAsync: banUser, isPending: isBanning } = useBanUser();
  const { mutateAsync: unbanUser, isPending: isUnbanning } = useUnbanUser();
  const { mutateAsync: approveProvider, isPending: isApproving } =
    useApproveProvider();
  //   const language: "en" | "ar" = i18n.resolvedLanguage === "ar" ? "ar" : "en";

  if (loadingProvider) return <Loader />;

  const {
    avatar,
    business_name,
    name,
    governorate,
    city,
    address,
    rating,
    reviews_count,
    approval_status,
    is_banned,
    phone,
    years_of_experience,
    description,
    categories,
    working_hours,
  } = provider as Provider;

  const businessInfo: InfoBlockProps[] = [
    { title: "name", value: name },
    { title: "email", value: name },
    { title: "phone", value: phone },
    {
      title: "years of experience",
      value: String(years_of_experience + " years"),
    },
    { title: "location", value: `${city.name}, ${governorate.name}` },
  ];

  //   const workingHoursInfo: InfoBlockProps[] = working_hours.map((day) => ({
  //     title: weekDays[day.day_of_week],
  //     value: `${day.start_time} - ${day.end_time}`,
  //   }));

  return (
    <section className="flex flex-col gap-4">
      <Modal>
        {/* Header */}
        <header className="card bg-bg-main flex flex-row gap-4 p-8">
          <span
            className=" absolute top-4 left-4 text-primary-500 cursor-pointer text-xl"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack />
          </span>
          <img
            src={avatar}
            alt="profile item"
            className=" w-32 h-32 object-cover rounded-full"
          />
          <div className="flex flex-col justify-between items-end w-full">
            <div className="flex justify-between w-full">
              <Heading as="h3">{business_name}</Heading>
              <div className=" flex gap-2">
                <p
                  className={`${statusColors[approval_status]} ${statusBgColors[approval_status]} px-2 rounded-full h-fit capitalize font-semibold`}
                >
                  {approval_status}
                </p>
                <p
                  className={`${statusColors[is_banned ? "banned" : "active"]} ${statusBgColors[is_banned ? "banned" : "active"]} px-2 rounded-full h-fit capitalize font-semibold`}
                >
                  {is_banned ? "banned" : "active"}
                </p>
              </div>
            </div>

            <div className="w-full flex justify-between items-end">
              <div>
                <div className="w-full">
                  <p className="font-semibold text-lg capitalize">
                    {name || "provicer name"}
                  </p>
                  <div className="flex gap-2 items-center">
                    <FaStar className=" text-warning" />
                    <span>
                      {rating}, {reviews_count} reviews
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <GrLocation className="text-primary-500" />
                  <p>{address}</p>
                </div>
              </div>
              <div className="flex gap-2 items-end justify-end h-fit">
                {approval_status === "pending" && (
                  <>
                    <Modal.Open opens="approve">
                      <Button variant="success">Approve</Button>
                    </Modal.Open>
                    <Modal.Open opens="reject">
                      <Button variant="danger">Reject</Button>
                    </Modal.Open>
                  </>
                )}
                {is_banned ? (
                  <Modal.Open opens="unban">
                    <Button variant="success">Unban</Button>
                  </Modal.Open>
                ) : (
                  <Modal.Open opens="ban">
                    <Button variant="danger">Ban</Button>
                  </Modal.Open>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* <div className="flex flex-col lg:flex-row gap-4"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* left */}
          <div className="flex flex-col gap-4">
            <div className="card">
              <Heading as="h4">Business Information</Heading>
              {businessInfo.map((item) => (
                <InfoBlock {...item} />
              ))}
            </div>
            <div className="card h-full">
              <Heading as="h4">about business</Heading>
              <pre className="text-wrap font-sans">{description}</pre>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col gap-4">
            <div className="card h-full">
              <Heading as="h4">Categories</Heading>
              <div className="flex gap-2">
                {/* {categories.map((category) =>
                language === "ar" ? (
                  <p>{category.ar.name}</p>
                ) : (
                  <p>{category.en.name}</p>
                ),
              )} */}
                {categories.map((category) => (
                  <div className="flex gap-2 items-center bg-primary-500/10 w-fit rounded-full px-4 py-2 ">
                    <img
                      src={category.icon}
                      alt={category.en.name}
                      className="w-6 h-6"
                    />
                    <span>{category.en.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <Heading as="h4">working hours</Heading>
              <div className="flex flex-col gap-2s">
                {working_hours.map((day) => (
                  <div className="flex justify-between">
                    <Heading as="h6">{weekDays[day.day_of_week]}</Heading>
                    <p>
                      {day.start_time} - {day.end_time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="card h-fit max-h-130 overflow-y-auto">
            <Heading as="h5">Gallery</Heading>
            {loadingPortfolios ? (
              <Loader />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {portfolios?.map((item: Portfolio) =>
                  item.type === "image" ? (
                    <img
                      src={item.url}
                      alt="gallery"
                      className="w-full rounded-md"
                    />
                  ) : (
                    <video src={item.url} controls className="w-full" />
                  ),
                )}
              </div>
            )}
          </div>

          <div className="card max-h-130 overflow-y-auto">
            <Heading as="h5">Reviews</Heading>
            {loadingReviews ? (
              <Loader />
            ) : (
              <div className="flex flex-col gap-2">
                {reviews?.reviews.map((review: Review) => (
                  <ReviewCard review={review} />
                ))}
              </div>
            )}
          </div>
        </div>

        <Modal.Window name="unban">
          <ConfirmationModal
            action="unban"
            resource="service provider"
            onConfirm={() => unbanUser(String(id))}
            disabled={isUnbanning}
          />
        </Modal.Window>

        <Modal.Window name="ban">
          <ConfirmationModal
            action="ban"
            resource="service provider"
            onConfirm={() => banUser(String(id))}
            disabled={isBanning}
          />
        </Modal.Window>

        <Modal.Window name="approve">
          <ConfirmationModal
            action="approve"
            resource="service provider"
            onConfirm={() => approveProvider(String(id))}
            disabled={isApproving}
            confirmButtonVariant="primary"
          />
        </Modal.Window>

        <Modal.Window name="reject">
          <RejectProvider providerId={String(id)} />
        </Modal.Window>
      </Modal>
    </section>
  );
};

export default ProviderDetails;
