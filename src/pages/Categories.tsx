import { useTranslation } from "react-i18next";
import Heading from "../components/ui/Heading";
import { useCategories } from "../features/categories/hooks/useCategories";
import Loader from "../components/common/Loader";
import CategoryCard from "../features/categories/components/CategoryCard";
import type { Category } from "../features/categories/types";

const Categories = () => {
  const { t } = useTranslation();
  const { data: categories = [], isPending } = useCategories();
  console.log("categories", categories);

  return (
    <section>
      <Heading as="h2">{t("categories")}</Heading>

      {isPending ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
          {categories.map((category: Category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Categories;
