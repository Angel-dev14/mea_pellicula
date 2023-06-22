package mk.ukim.finki.mea_pellicula.Dtos;

import mk.ukim.finki.mea_pellicula.model.MovieProjectionsView;
import mk.ukim.finki.mea_pellicula.model.UpcomingProjectionsView;

import java.util.List;

public class MovieProjectionAndRatingDto {
    List<UpcomingProjectionsView> projectionsViewList;
    double averageRating;

    public MovieProjectionAndRatingDto() {
    }

    public MovieProjectionAndRatingDto(List<UpcomingProjectionsView> projectionsViewList, double averageRating) {
        this.projectionsViewList = projectionsViewList;
        this.averageRating = averageRating;
    }

    public List<UpcomingProjectionsView> getProjectionsViewList() {
        return projectionsViewList;
    }

    public void setProjectionsViewList(List<UpcomingProjectionsView> projectionsViewList) {
        this.projectionsViewList = projectionsViewList;
    }

    public double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }
}
