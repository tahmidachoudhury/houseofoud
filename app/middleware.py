from django.utils.deprecation import MiddlewareMixin
import logging

logger = logging.getLogger(__name__)


class CSRFMiddleware(MiddlewareMixin):
    def process_request(self, request):
        logger.debug(f"CSRF Token from request header: {
                     request.META.get('HTTP_X_CSRFTOKEN')}")
        logger.debug(f"CSRF Token from cookie: {
                     request.COOKIES.get('csrftoken')}")
