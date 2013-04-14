package ut.veeb.lambiprojekt123;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.channel.ChannelMessage;
import com.google.appengine.api.channel.ChannelService;
import com.google.appengine.api.channel.ChannelServiceFactory;

@SuppressWarnings("serial")
public class ChannelServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.setContentType("text/plain");
		if(req.getParameter("operation").equals("gettoken")){
			ChannelService channelService = ChannelServiceFactory.getChannelService();
			// The channelKey can be generated in any way that you want, as long as it remains
			// unique to the user.
			String channelKey = "xyz";
			String token = channelService.createChannel(channelKey);
			System.out.println("saadan channel tokeni :" + token );
			resp.getWriter().write(token);
		}
		else if(req.getParameter("operation").equals("msg")){
			ChannelService channelService = ChannelServiceFactory.getChannelService();

			// This channelKey needs to be the same as the one in the first section above.
			String channelKey = "xyz";

			// This is what actually sends the message.
			channelService.sendMessage(new ChannelMessage(channelKey, "Hello World!"));
		}
		else {
			System.out.println("Mingi viga tokeni päringul");
		}
	}
}