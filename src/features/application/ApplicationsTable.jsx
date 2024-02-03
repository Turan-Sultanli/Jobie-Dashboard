import Logo from "../../shared/Logo";
import AppPhone from "../../assets/icons/AppPhone";
import AppMessage from "../../assets/icons/AppMessage";
import Dots from "../../assets/icons/Dots";
import Footer from "../../shared/Footer";
import useGetApplications from "./useGetApplications";
import Loader from "../../shared/Loader";

function ApplicationsTable() {
  const { applications, count, isLoading } = useGetApplications();

  if(isLoading) return <Loader />

  return (
    <div className="grid ">
      <div className="bg-card rounded-[20px] xl:mt-10 lg:mt-8 mt-6 h-fit overflow-auto  ">
        <table className="w-full min-w-[1200px] border-collapse border-spacing-0  [&_tr]:border-b [&_tr]:border-b-solid [&_tr]:border-b-gray-100 ">
          <thead className="text-lg ">
            <tr className="[&>th]:font-medium text-left [&>th]:py-8 dark:[&_th]:text-gray-100">
              <th className="pl-10">
                <input type="checkbox" name="" id="" />
              </th>
              <th>ID</th>
              <th>Date Applied</th>
              <th>Company</th>
              <th>Type</th>
              <th>Postition</th>
              <th>Contact</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => {
              const company = app.vacancies.companies;
              return (
                <tr key={app.id} className="[&>td]:py-8 dark:[&_td]:text-gray-200">
                  <td className="pl-10">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="font-medium">#{app.id}</td>
                  <td>June 1, 2020, 08:22 AM</td>
                  <td>
                    <div className="flex items-center gap-4">
                      <Logo w={50} h={50} src={company.logo} />
                      <div>
                        <h6 className="font-semibold text-base">
                          {company.name}
                        </h6>
                        <p className="text-gray-300 text-sm">
                          Creative Design Agency
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="uppercase">{app.position_type}</td>
                  <td>{app.position}</td>
                  <td>
                    <div className="flex items-center gap-4">
                      {app.phone && (
                        <div className="w-12 h-12 rounded-full border border-solid border-gray-100 grid place-content-center">
                          <a href={`tel:${app.phone}`}>
                            <AppPhone />
                          </a>
                        </div>
                      )}
                      {app.email && (
                        <div className="w-12 h-12 rounded-full border border-solid border-gray-100 grid place-content-center">
                          <a href={`mailto:${app.email}`}>
                            <AppMessage />
                          </a>
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <div
                      className={`status-${app.status} capitalize rounded-[60px] border border-solid  grid place-content-center  w-[130px] h-[50px] `}
                    >
                      <span>{app.status}</span>
                    </div>
                  </td>
                  <td className="pr-6">
                    <button className="border-none outline-transparent">
                      <Dots />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer total={count} variant={"applications"} />
    </div>
  );
}

export default ApplicationsTable;
