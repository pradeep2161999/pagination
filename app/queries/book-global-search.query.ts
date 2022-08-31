import { Op } from "sequelize";

function globalSearchQuery(text: string) {
  const searchQueries: any[] = [];
  searchQueries.push({
    BookName: { [Op.iLike]: `%${text}%` },
  });
  searchQueries.push({
    BookAuthor: { [Op.iLike]: `%${text}%` },
  });
  searchQueries.push({
    Description: { [Op.iLike]: `%${text}%` },
  });
  searchQueries.push({
    "$users.Name$": { [Op.iLike]: `%${text}%` },
  });
  return {
    [Op.or]: searchQueries,
  };
}

export default globalSearchQuery;
