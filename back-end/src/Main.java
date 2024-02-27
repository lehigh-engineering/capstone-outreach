package edu.lehigh.backend
// Import the Spark package, so that we can make use of the "get" function to 
// create an HTTP GET route
import spark.Spark;

public class Main {
    public static void main(String[] args) {
        Spark.port(4567);

        // Define routes
        Spark.get("/", (req, res) -> {
            return "Hello";
        });
    }
}