import {Path} from "@jest/types/build/Config";

@Produces(MediaType.APPLICATION_JSON)
@Path("giraffes")

public class GiraffeService {
    List<String> giraffes = Array.asList("Melman", "Elmer");
    @GET
}