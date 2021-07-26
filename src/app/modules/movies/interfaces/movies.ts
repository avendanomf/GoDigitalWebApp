import { Genre } from "./genre";
import { ProductionCompanies } from "./productionCompanies";
import { ProductionCountry } from "./productionCountry";
import { SpokenLanguage } from "./spokenLanguage";

export class movies {
    'adult': boolean;
    'backdrop_path'?: any;
    'belongs_to_collection'?: any;
    'budget': number;
    'genres': Genre[];
    'homepage': string;
    'id': number;
    'imdb_id': string;
    'original_language': string;
    'original_title': string;
    'overview': string;
    'popularity': number;
    'poster_path': string;
    'production_companies': ProductionCompanies[];
    'production_countries': ProductionCountry[];
    'release_date': string;
    'revenue': number;
    'runtime': number;
    'spoken_languages': SpokenLanguage[];
    'status': string;
    'tagline': string;
    'title': string;
    'video': boolean;
    'vote_average': number;
    'vote_count': number;
}
