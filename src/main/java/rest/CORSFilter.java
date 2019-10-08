package rest;

import javax.annotation.Priority;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.Context;
import javax.ws.rs.ext.Provider;
import java.io.IOException;

@Provider
@Priority(500)
public class CORSFilter implements ContainerRequestFilter {
    @Context
    private HttpServletRequest request;
    @Context
    private HttpServletResponse response;

    @Override
    public void filter(ContainerRequestContext containerRequestContext) throws IOException {
        if (System.getenv("HEROKUBUILD") == null) {
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.setHeader("Acces-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS, PATCH");
            String requestAllowHeader = request.getHeader("Acces-Control-Request_Headers");
            response.setHeader("Access-Control-Allow-Headers", requestAllowHeader);
            response.setHeader("Acces-Control-Allow-Credentials", "true");
            response.setHeader("Access-Control-Expose-Headers", "Authorization");
            response.setHeader("encoding", "utf-8");
        }
    }
}
